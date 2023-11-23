<?php

/*Template Name: Inicio*/

get_header(); ?>
<section class="home">
	<div class="fondo">
		<div class="swiper swiperHome">
			<div class="swiper-wrapper">
				<?php foreach (get_field('slider_home') as $value) { ?>
				<div class="swiper-slide">
					<div class="filtro"></div>
					<video
                  		class="background-video"
                  		preload="auto"
                  		loop=""
                  		playsinline
                  		muted
						poster="<?php echo $value['portada_slider_home']['url']; ?>"
                	>
                  		<source src="<?php echo $value['video_slider_home']['url']; ?>" type="video/mp4" />
                	</video>
                	<div class="container">
                  		<button class="sound-button">
                    		<img src="<?php bloginfo('template_url'); ?>/assets/img/conmusica.svg" alt="" class="con">
                    		<img src="<?php bloginfo('template_url'); ?>/assets/img/sinmusica.svg" alt="" class="sin">
                  		</button>
                	</div>
				</div>
				<?php }?>
			</div>
		</div>
	</div>
	<div class="container">
	  <div
	    class="content"
	    data-aos="fade-up"
	    data-aos-duration="1000"
	    data-aos-once="true"
	  >
	    <h1><?php echo get_field('titulo_cabecera'); ?></h1>
	    <a href="<?php echo get_field('enlace'); ?>" class="dorado"
	      ><?php echo get_field('texto_enlace'); ?><img src="<?php bloginfo('template_url'); ?>/assets/img/flecha-blanca.svg" alt="" />
	    </a>
	  </div>
	</div>
	<div class="container puntos">
        <div class="swiper-pagination"></div>
    </div>
</section>

<section class="bajada">
    <div class="container">
      <div
        class="title"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-once="true"
      >
        <h2><?php echo get_field('titulo_negocio'); ?></h2>
      </div>
      <div
        class="contentText"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-once="true"
      >
        <div class="content">
          <p><?php echo get_field('contenido_negocio'); ?></p>
        </div>
      </div>
    </div>
</section>

<section class="negociosHome">
        <div
          class="container2"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <div class="swiper swiperNegocios">
            <div class="swiper-wrapper">

            	<?php

		            $the_query = new WP_Query( array(
		            'post_type' => 'negocio',
		            'posts_per_page' => -1,
		            'orderby'   => array(
				      'date' =>'ASC'
				     )
		        ) );

		        while ( $the_query->have_posts() ) :
		            $the_query->the_post();  ?>

		            <div class="swiper-slide">
		                <div class="itemNegocios">
		                	<?php if(get_field('enlace_externo')){ ?>
		                  		<a href="<?php echo get_field('enlace_externo'); ?>" target="_blank">
		                	<?php }else{ ?>
		                  		<a href="<?php the_permalink(); ?>">
		                	<?php } ?>
			                    <div class="filtro"></div>
			                    <img src="<?php echo get_field('banner_lista')['url']; ?>" alt="<?php echo get_field('banner_lista')['alt']; ?>"  >
			                    <div
			                      class="text"
			                    >
			                      <div class="info">
			                        <h3><?php the_title(); ?></h3>
			                        <p><?php echo get_field('contenido_banner_lista'); ?></p>
			                      </div>
			                      <div class="btn">
			                        <button class="dorado">
			                          <span><?php echo get_field('texto_ver_mas','option') ?></span>
			                          <span>
			                            <img src="<?php bloginfo('template_url'); ?>/assets/img/flecha-blanca.svg" alt="" />
			                          </span>
			                        </button>
			                      </div>
			                    </div>
			                </a>
		                </div>
		              </div>


		        <?php endwhile; wp_reset_postdata(); ?>

            </div>
            <div class="swiper-pagination"></div>
          </div>
        </div>
</section>

<?php 
get_footer();
