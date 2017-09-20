var init_stock_lookup;

init_stock_lookup = function() {
    $('#stock-lookup-form').on('ajax:success', function(event, data, status) {
         $('#stock-lookup').replaceWith(data);
         init_stock_lookup();
    })
}
    //couldnt get errors to work
    // $('#stock-lookupform').on('ajax:error',function(event, xhr, status, error){
    //     $('#stock-lookup-results').replaceWith(' ');
    //     $('#stock-lookup-errors').replaceWith('Stock was not found.')
    // });
    // was going to use a lifecycle method to render a loading..
    // $('#stock-lookup-form').on('ajax:before', function(event, data, status){
        
    //     });
        

    

$(document).ready( function(){
    init_stock_lookup();
})