sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'rishmanagement/risks/test/integration/FirstJourney',
		'rishmanagement/risks/test/integration/pages/RisksList',
		'rishmanagement/risks/test/integration/pages/RisksObjectPage'
    ],
    function(JourneyRunner, opaJourney, RisksList, RisksObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('rishmanagement/risks') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheRisksList: RisksList,
					onTheRisksObjectPage: RisksObjectPage
                }
            },
            opaJourney.run
        );
    }
);