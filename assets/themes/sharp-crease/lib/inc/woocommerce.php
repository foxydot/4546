<?php
remove_action( 'woocommerce_before_main_content','woocommerce_breadcrumb', 20, 0);
add_action('woocommerce_archive_description','msdlab_do_woocommerce_subtitle',9);
if ( ! function_exists( 'msdlab_do_woocommerce_subtitle' ) ) {
    function msdlab_do_woocommerce_subtitle() {
        if ( is_post_type_archive( 'product' ) && get_query_var( 'paged' ) == 0 ) {
            $shop_page   = get_post( wc_get_page_id( 'shop' ) );
            if ( $shop_page ) {
                global $subtitle_metabox;
                $subtitle_metabox->the_meta(wc_get_page_id( 'shop' ));
                $subtitle = $subtitle_metabox->get_the_value('subtitle');
            
                if ( strlen( $subtitle ) == 0 )
                    return;
            
                $subtitle = sprintf( '<h2 class="entry-subtitle">%s</h2>', apply_filters( 'genesis_post_title_text', $subtitle ) );
                if ( $subtitle ) {
                    echo apply_filters( 'genesis_post_title_output', $subtitle ) . "\n";
                }
            }
        }
    }
}

add_filter('loop_shop_columns','msdlab_change_cols');
function msdlab_change_cols($data){
    //global $template;
    //$template_file_name      = basename( $template );
    //if($template_file_name == 'archive-product.php'){
        return 3;
    //}
    return $data;
}


function woocommerce_template_product_description() {
woocommerce_get_template( 'single-product/tabs/description.php' );
}
add_action( 'woocommerce_single_product_summary', 'woocommerce_template_product_description', 20 );

add_filter( 'woocommerce_product_tabs', 'woo_remove_product_tabs', 98 );

function woo_remove_product_tabs( $tabs ) {

    unset( $tabs['description'] );          // Remove the description tab

    return $tabs;

}