(function () {
    angular.module('serviceModule')

        .factory('utilService', function () {

            function getItemFromArrayById(array, itemId) {
                return array.find(function (item) {
                    return item.id === itemId;
                })
            }

            function doesItemTitleExists(array, itemTitle) {
                var listIndex = array.findIndex(function (item) {
                    return item.title === itemTitle;
                });
                return listIndex !== -1
            }

            function returnIndexFromItemId(array,itemId) {
                var Index = array.findIndex(function (item) {
                    return item.id === itemId;
                });
                if (Index !== -1) {
                    return Index
                } else {
                    console.log('returnIndexFromItemId: Fail!')
                }
            }

            return {
                getItemFromArrayById: getItemFromArrayById,
                doesItemTitleExists: doesItemTitleExists,
                returnIndexFromItemId: returnIndexFromItemId
            }
        });

})
();