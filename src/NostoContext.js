class Context {
    constructor() {
        this.mode = 'JSON_750x750';
        const nostojs = 'nostojs';
        window[nostojs] =
            window[nostojs] ||
            function(cb) {
                (window[nostojs].q = window[nostojs].q || []).push(cb);
            };
    }

    /**
     * Fetch recommended product data for given slots
     */
    fetchAndPopulateRecommendations(slots) {
        var mode = this.mode;
        var elements = [];

        return new Promise(function (resolve, reject) {
            nostojs(function(api) {
                api.setResponseMode(mode);
                var request = api.createRecommendationRequest();
                request.addElements(slots);
                request.enablePreview(true);
                request.addCurrentVariation('NOT-LOGGED-IN');
                request.setResponseMode(mode);

                api.listen("postrender", function (event) {
                    if(!event.responseData) {
                        reject('no data');
                    }
                    Object.keys(event.responseData).forEach(function (id) {
                        elements.push({
                            name: id,
                            data: event.responseData[id]
                        });

                        resolve(elements);
                    });
                });
                request.loadRecommendations();
            });
        });
    }
}

export default new Context();
