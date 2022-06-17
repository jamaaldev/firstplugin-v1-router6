<?php
/**
 * Plugin Name:       First Plugin
 * Description:       A First Plugin platform made by WordPress React 17.
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Jamaal Mahamed
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       firstplugin
 */

add_action( 'admin_menu', 'firstplugin_init_menu' );

/**
 * Init Admin Menu.
 *
 * @return void
 */
function firstplugin_init_menu() {
    add_menu_page( __( 'First Plugin', 'firstplugin'), __( 'First Plugin', 'firstplugin'), 'manage_options', 'firstplugin', 'firstplugin_admin_page', 'dashicons-plugins-checked', '50' );
}

/**
 * Init Admin Page.
 *
 * @return void
 */
function firstplugin_admin_page() {
    require_once plugin_dir_path( __FILE__ ) . 'templates/tmpl_firstplugin.php'; // plugin_dir_path marka rabto inaad soo gashato pagekaan ku xiratiid
}

add_action( 'admin_enqueue_scripts', 'firstplugin_admin_enqueue_scripts' );

/**
 * Enqueue scripts and styles.
 *
 * @return void
 */
function firstplugin_admin_enqueue_scripts() {
    // $valid_pages = array("etc","etc","etc");
		$valid_pages = array("firstplugin");
		// we have to read the paremiter page value after ? for example we get firstplugin after ?page=... if we are in that position we will use.;
		$page = isset($_REQUEST['page']) ? isset($_REQUEST['page']) : '';

        // we will check again to compare if our array value pages is valid inside variable $page
        if(in_array($page,$valid_pages)){
        // wp_enqueue_style iyo wp_enqueue_script wordpress aya usheegesa styleka iyo script istacmaali laha mesha taalo.
        wp_enqueue_style( 'firstplugin-style', plugin_dir_url( __FILE__ ) . 'build/index.css' ); // plugin_dir_url marka rabto inaad usheegto mesha fileka ku yaalo,sida css iyo js
        wp_enqueue_script( 'firstplugin-script', plugin_dir_url( __FILE__ ) . 'build/index.js', array( 'wp-element' ), '1.0.0', true );

        }
}