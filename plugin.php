<?php
/**
 * Plugin Name: FREEMAN block
 * Plugin URI: https://github.com/9631kunn/freeman_gutenberg_block
 * Description: 投稿作業を効率化するためのプラグインです
 * Author: 9631kunn
 * Author URI: https://31navi.com
 * Version: 1.0.0
 * License: GPL2
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';