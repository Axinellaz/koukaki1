<?php

get_header();
?>

    <main id="primary" class="site-main">
        <section class="banner">
            <img class="video__img-txt floating" src="<?php echo get_template_directory_uri() . '/assets/images/logo.png'; ?> " alt="logo Fleurs d'oranger & chats errants">
            <video id="background-video"  autoplay loop muted src="<?php echo get_stylesheet_directory_uri() . './video-back-header/video-back-header-koukaki.mp4'; ?> " data-bottom-top="transform:translate3d(0px, 0, 0)" data-top-bottom="transform:translate3d(90px, 0, 0)"type="video/mp4" >
            
            </video>
        </section>
        <section id="#story" class="story">
            <h2 class="title-h2"> 
                <span class="fadeinBottomStory" >L'</span>
                <span class="fadeinBottomStory-2">histoire</span>
            </h2>
            <article id="" class="story__article">
                <p><?php echo get_theme_mod('story'); ?></p>
            </article>
            <?php
            $args = array(
                'post_type' => 'characters',
                'posts_per_page' => -1,
                'meta_key'  => '_main_char_field',
                'orderby'   => 'meta_value_num',

            );
            $characters_query = new WP_Query($args);
            ?>
            <article id="characters">
                <div class="main-character">
                    <h3 class="title-h3">
                        <span class="fadeinBottomCharacters">Les</span>
                        <span class="fadeinBottomCharacters-2">personnages</span>
                    </h3>
                    <?php get_template_part( 'characters-section' ); ?>
                </div>
            </article>
            <article id="place">
                <div class="container">
                    <h3 class="title-h3-place">
                        <span class="fadeinBottomPlace">Le</span>
                        <span class="fadeinBottomPlace-2">Lieu</span>
                    </h3>
                    <p><?php echo get_theme_mod('place'); ?></p>
                    <div  class="slider__inner--place">
                        <img  data-bottom-top="transform:translate3d(-270px, 0, 0)" data-top-bottom="transform:translate3d(300px, 0, 0)"  class="cloud big " src=" <?php echo get_stylesheet_directory_uri() . './images_koukaki/big_cloud.png'; ?>">
                        <img data-bottom-top="transform:translate3d(15px, 0, 0)" data-top-bottom="transform:translate3d(300px, 0, 0)" class="cloud little" src="<?php echo get_stylesheet_directory_uri() . './images_koukaki/little_cloud.png'; ?> ">
                        
                    </div>
                </div>

            </article>
        </section>


        <section id="studio">
            <h2 class="title-h2">
                <span class="fadeinBottomStudio">Studio</span>
                <span class="fadeinBottomStudio-2">Koukaki</span>
            </h2>
            <div>
                <p>Acteur majeur de l’animation, Koukaki est un studio intégré fondé en 2012 qui créé, produit et distribue des programmes originaux dans plus de 190 pays pour les enfants et les adultes. Nous avons deux sections en activité : le long métrage et le court métrage. Nous développons des films fantastiques, principalement autour de la culture de notre pays natal, le Japon.</p>
                <p>Avec une créativité et une capacité d’innovation mondialement reconnues, une expertise éditoriale et commerciale à la pointe de son industrie, le Studio Koukaki se positionne comme un acteur incontournable dans un marché en forte croissance. Koukaki construit chaque année de véritables succès et capitalise sur de puissantes marques historiques. Cette année, il vous présente “Fleurs d’oranger et chats errants”.</p>
            </div>
            </section>
    </main><!-- #main -->

<?php
get_footer();
