// JavaScript Document
window.onload = function () {
  var updateInterval = 1000;
	setInterval(function(){
		updateChart()}, updateInterval);
		var rnd = [{y: 110, indexLabel: 'republican', legendText: 'republican'},
					{y: 104, indexLabel: 'republicans', legendText: 'republicans'},
					{y: 99, indexLabel: 'presidential', legendText: 'presidential'},
					{y: 95, indexLabel: 'democratic', legendText: 'democratic'},
					{y: 87, indexLabel: 'democratic', legendText: 'democratic'},
					{y: 81, indexLabel: 'senate', legendText: 'senate'},
					{y: 57, indexLabel: 'congressional', legendText: 'congressional'},
					{y: 52, indexLabel: 'senator', legendText: 'senator'},
					{y: 51, indexLabel: 'secretary', legendText: 'secretary'},
					{y: 50, indexLabel: 'administration', legendText: 'administration'},
					{y: 47, indexLabel: 'bush', legendText: 'bush'},
					{y: 47, indexLabel: 'speech', legendText: 'speech'},
					{y: 44, indexLabel: 'election', legendText: 'election'},
					{y: 36, indexLabel: 'legislation', legendText: 'legislation'},
					{y: 36, indexLabel: 'conservative', legendText: 'conservative'},
					{y: 34, indexLabel: 'immigration reform', legendText: 'immigration reform'},
					{y: 33, indexLabel: 'lawmakers', legendText: 'lawmakers'},
					{y: 30, indexLabel: 'clinton', legendText: 'clinton'},
					{y: 29, indexLabel: 'michelle', legendText: 'michelle'},
					{y: 28, indexLabel: 'voters', legendText: 'voters'},
					{y: 27, indexLabel: 'obamacare', legendText: 'obamacare'},
					{y: 25, indexLabel: 'proposal', legendText: 'proposal'},
					{y: 24, indexLabel: 'proposed', legendText: 'proposed'},
					{y: 22, indexLabel: 'senators', legendText: 'senators'},
					{y: 22, indexLabel: 'reform', legendText: 'reform'},
					{y: 21, indexLabel: 'agenda', legendText: 'agenda'},
					{y: 21, indexLabel: 'remarks', legendText: 'remarks'},
					{y: 20, indexLabel: 'committee', legendText: 'committee'},
					{y: 19, indexLabel: 'attorney', legendText: 'attorney'},
					{y: 18, indexLabel: 'democrat', legendText: 'democrat'}];   //dataPoints.

    var chart = new CanvasJS.Chart("chartContainer",
    {
		title:{
			 enabled: false,
			 
		},
		legend: {
			fontSize: 10,
       		fontFamily: "Myriad Pro",
      		fontColor: "darkgrey",
			horizontalAlign: "left",
       		verticalAlign: "bottom",  // "top" , "bottom"
     	},
		toolTip:{
			content: function(e){
          var content;
          content = "Background: " + "<b>" +e.entries[0].dataPoint.indexLabel + "</b><br>Occurrence: "+"<b>"+e.entries[0].dataPoint.y+"</b>";
          return content;
        },
        enabled: true,       //disable here
        animationEnabled: true //disable here
      },
      data: [
      {
        //startAngle: 45,
       indexLabelFontSize: 10,
       indexLabelFontFamily: "Myriad Pro",
       indexLabelFontColor: "darkgrey",
       indexLabelLineColor: "darkgrey",
       indexLabelPlacement: "outside",
       type: "doughnut",
       showInLegend: true,
       dataPoints: rnd
     }
     ]
   });

    chart.render();
  }