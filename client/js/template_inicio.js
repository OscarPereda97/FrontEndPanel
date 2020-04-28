Template.sidebar.onCreated(() => {

    let template = Template.instance()

    template.autorun(() => {
        //template.subscribe("ventas")
    })

})

Template.sidebar.helpers({
    ventas() {
        //return Ventas.find()
        return [{
            nombre: "test 1",
            _id: "1"
        }, {
            nombre: "test 2",
            _id: "2"
        }]
    }
})




Template.sidebar.onRendered(function () {

    var trigger = $('.hamburger'),
        overlay = $('.overlay'),
        isClosed = false;

    trigger.click(function () {
        hamburger_cross();
    });

    function hamburger_cross() {

        if (isClosed == true) {
            overlay.hide();
            trigger.removeClass('is-open');
            trigger.addClass('is-closed');
            isClosed = false;
        } else {
            overlay.show();
            trigger.removeClass('is-closed');
            trigger.addClass('is-open');
            isClosed = true;
        }
    }

    $('[data-toggle="offcanvas"]').click(function () {
        $('#wrapper').toggleClass('toggled');
    });
})


Template.sidebar.onRendered(function () {
    am4core.ready(function() {

        // Themes begin
        am4core.useTheme(am4themes_material);
        am4core.useTheme(am4themes_animated);
        // Themes end
        
        // Create chart instance
        var chart = am4core.create("chartdiv", am4charts.XYChart3D);
        
        // Add data
        chart.data = [{
          "country": "NM",
          "visits": 402500
        }, {
          "country": "MD",
          "visits": 188200
        
        }];
        
        // Create axes
        let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
        categoryAxis.dataFields.category = "country";
        categoryAxis.renderer.labels.template.rotation = 270;
        categoryAxis.renderer.labels.template.hideOversized = false;
        categoryAxis.renderer.minGridDistance = 20;
        categoryAxis.renderer.labels.template.horizontalCenter = "right";
        categoryAxis.renderer.labels.template.verticalCenter = "middle";
        categoryAxis.tooltip.label.rotation = 270;
        categoryAxis.tooltip.label.horizontalCenter = "right";
        categoryAxis.tooltip.label.verticalCenter = "middle";
        
        let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
        valueAxis.title.text = "Monto";
        valueAxis.title.fontWeight = "bold";
        
        // Create series
        var series = chart.series.push(new am4charts.ColumnSeries3D());
        series.dataFields.valueY = "visits";
        series.dataFields.categoryX = "country";
        series.name = "Visits";
        series.tooltipText = "{categoryX}: [bold]{valueY}[/]";
        series.columns.template.fillOpacity = .8;
        
        var columnTemplate = series.columns.template;
        columnTemplate.strokeWidth = 2;
        columnTemplate.strokeOpacity = 1;
        columnTemplate.stroke = am4core.color("#FFFFFF");
        
        columnTemplate.adapter.add("fill", function(fill, target) {
          return chart.colors.getIndex(target.dataItem.index);
        })
        
        columnTemplate.adapter.add("stroke", function(stroke, target) {
          return chart.colors.getIndex(target.dataItem.index);
        })
        
        chart.cursor = new am4charts.XYCursor();
        chart.cursor.lineX.strokeOpacity = 0;
        chart.cursor.lineY.strokeOpacity = 0;
        
        }); // end am4core.ready()
})