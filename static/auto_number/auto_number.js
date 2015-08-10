/*
 Auto number headings.

 Src:  https://github.com/ipython/ipython/issues/4097
 */
$(document).ready(function(){
    $("h1").each(function(index1) {
        $(this).prepend((index1+1) + ". ");

        $("h2").each(function(index2) {
            $(this).prepend((index1+1) + "." + (index2+1) + ". ");

            $("h3").each(function(index3) {
                $(this).prepend((index1+1) + "." + (index2+1) + '.' + (index3+1) + ". ");
            });

        });
    });
});