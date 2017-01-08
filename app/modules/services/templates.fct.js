(function () {
    'use strict';

    angular.module('app.services')
        .factory('TemplateService', templateService);

    function templateService() {
        return {
            getTemplates: getTemplates,
            createTemplate: createTemplate,
            updateTemplate: updateTemplate,
            deleteTemplate: deleteTemplate,
            getTemplate: getTemplate
        };
        
        function getTemplates() {
            
        }
        
        function createTemplate() {
            
        }
        
        function updateTemplate() {
            
        }
        
        function deleteTemplate() {
            
        }
        
        function getTemplate() {
            
        }
    }
})();