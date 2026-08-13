<?php
/**
 * B&H Assistant Theme Functions
 */

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

function bh_assistant_theme_setup() {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('custom-logo');
}
add_action('after_setup_theme', 'bh_assistant_theme_setup');

function bh_assistant_enqueue_assets() {
    wp_enqueue_style('bh-assistant-style', get_stylesheet_uri(), array(), '1.0.0');
    
    // Auto-enqueue dist assets if available
    $dist_dir = get_template_directory() . '/dist/assets';
    if (is_dir($dist_dir)) {
        $files = scandir($dist_dir);
        if ($files) {
            foreach ($files as $file) {
                if (pathinfo($file, PATHINFO_EXTENSION) === 'css') {
                    wp_enqueue_style('bh-assistant-app-css-' . sanitize_title($file), get_template_directory_uri() . '/dist/assets/' . $file, array(), '1.0.0');
                }
                if (pathinfo($file, PATHINFO_EXTENSION) === 'js') {
                    wp_enqueue_script('bh-assistant-app-js-' . sanitize_title($file), get_template_directory_uri() . '/dist/assets/' . $file, array(), '1.0.0', true);
                }
            }
        }
    }
}
add_action('wp_enqueue_scripts', 'bh_assistant_enqueue_assets');
