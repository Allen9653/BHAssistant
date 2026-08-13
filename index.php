<?php
/**
 * Main Template File for B&H Assistant WordPress Theme
 *
 * @package BH_Assistant
 */

get_header();
?>

<div id="root">
    <?php
    $dist_index = get_template_directory() . '/dist/index.html';
    if (file_exists($dist_index)) {
        echo file_get_contents($dist_index);
    } else {
    ?>
    <main style="min-height: 80vh; display: flex; flex-direction: column; align-items: center; justify-content: center; background-color: #0A1628; color: #F5F0E8; font-family: sans-serif; text-align: center; padding: 2rem;">
        <h1 style="color: #00C9A7; font-size: 2rem; margin-bottom: 1rem;">B&H ASSISTANT d.o.o. Zenica</h1>
        <p style="color: #C9A84C; font-size: 1.25rem; font-weight: bold; margin-bottom: 1.5rem;">SPAJAMO KULTURE - STVARAMO ŠANSE</p>
        <p style="max-width: 600px; line-height: 1.6; color: #F5F0E8; opacity: 0.9;">
            Aplikacija se uspješno učitava. Ukoliko gradite produkcijsku verziju, pokrenite <code>npm run build</code> u korijenu teme kako bi se izgenerisao statički <code>dist</code> paket.
        </p>
    </main>
    <?php
    }
    ?>
</div>

<?php
get_footer();
