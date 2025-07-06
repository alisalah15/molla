// RTL JavaScript Support for Molla Template
(function($) {
    'use strict';

    // RTL Detection and Setup
    var isRTL = $('html').attr('dir') === 'rtl' || $('body').hasClass('rtl');
    
    if (isRTL) {
        // Add RTL class to body for additional styling hooks
        $('body').addClass('rtl-layout');
        
        // RTL Owl Carousel Configuration
        function setupRTLCarousel() {
            // Override default Owl Carousel settings for RTL
            if ($.fn.owlCarousel) {
                var originalOwlCarousel = $.fn.owlCarousel;
                
                $.fn.owlCarousel = function(options) {
                    if (isRTL) {
                        options = options || {};
                        options.rtl = true;
                        
                        // Reverse navigation text for RTL
                        if (options.navText) {
                            options.navText = [options.navText[1], options.navText[0]];
                        }
                    }
                    
                    return originalOwlCarousel.call(this, options);
                };
            }
        }
        
        // RTL Isotope Configuration
        function setupRTLIsotope() {
            if (typeof imagesLoaded === 'function' && $.fn.isotope) {
                // Override isotope for RTL
                var originalIsotope = $.fn.isotope;
                
                $.fn.isotope = function(options) {
                    if (isRTL && options && options.layoutMode === 'masonry') {
                        options.originLeft = false;
                    }
                    
                    return originalIsotope.call(this, options);
                };
            }
        }
        
        // RTL Magnific Popup Configuration
        function setupRTLMagnificPopup() {
            if ($.fn.magnificPopup) {
                // RTL specific settings for Magnific Popup
                $.extend(true, $.magnificPopup.defaults, {
                    closeBtnInside: false,
                    alignTop: false
                });
            }
        }
        
        // RTL NoUI Slider Configuration
        function setupRTLNoUISlider() {
            if (typeof noUiSlider === 'object') {
                // Custom RTL handling for price slider
                $(document).ready(function() {
                    var priceSlider = document.getElementById('price-slider');
                    if (priceSlider && priceSlider.noUiSlider) {
                        // Update slider for RTL
                        var currentValues = priceSlider.noUiSlider.get();
                        priceSlider.noUiSlider.updateOptions({
                            direction: 'rtl'
                        });
                    }
                });
            }
        }
        
        // RTL Dropdown Menu Positioning
        function setupRTLDropdowns() {
            $(document).on('show.bs.dropdown', function(e) {
                var $dropdown = $(e.target);
                var $menu = $dropdown.find('.dropdown-menu');
                
                // Reset positioning
                $menu.removeClass('dropdown-menu-right dropdown-menu-left');
                
                // Add RTL specific positioning
                if (isRTL) {
                    $menu.addClass('dropdown-menu-left');
                }
            });
        }
        
        // RTL Modal Positioning
        function setupRTLModals() {
            $(document).on('show.bs.modal', function(e) {
                var $modal = $(e.target);
                $modal.find('.modal-dialog').addClass('modal-dialog-rtl');
            });
        }
        
        // RTL Tooltip and Popover Positioning
        function setupRTLTooltips() {
            if ($.fn.tooltip) {
                // Override tooltip placement for RTL
                var originalTooltip = $.fn.tooltip;
                
                $.fn.tooltip = function(options) {
                    if (isRTL && options && options.placement) {
                        // Reverse left/right placements
                        if (options.placement === 'left') {
                            options.placement = 'right';
                        } else if (options.placement === 'right') {
                            options.placement = 'left';
                        }
                    }
                    
                    return originalTooltip.call(this, options);
                };
            }
        }
        
        // RTL Scroll Animations
        function setupRTLScrollAnimations() {
            // Reverse scroll-based animations for RTL
            $('.scroll-to').on('click', function(e) {
                var target = $(this).attr('href');
                var $target = $(target);
                
                if ($target.length) {
                    e.preventDefault();
                    var scrollOffset = $(window).width() >= 992 ? 
                        ($target.offset().top - 52) : $target.offset().top;
                    
                    $('html, body').animate({
                        'scrollTop': scrollOffset
                    }, 600);
                }
            });
        }
        
        // RTL Form Validation Messages
        function setupRTLFormValidation() {
            // Ensure validation messages appear correctly in RTL
            if ($.fn.validate) {
                $.extend($.validator.defaults, {
                    errorPlacement: function(error, element) {
                        if (isRTL) {
                            error.insertBefore(element);
                        } else {
                            error.insertAfter(element);
                        }
                    }
                });
            }
        }
        
        // RTL Date Picker Configuration
        function setupRTLDatePicker() {
            if ($.fn.datepicker) {
                $.fn.datepicker.defaults.rtl = true;
                $.fn.datepicker.defaults.orientation = 'auto right';
            }
        }
        
        // RTL Select2 Configuration
        function setupRTLSelect2() {
            if ($.fn.select2) {
                var originalSelect2 = $.fn.select2;
                
                $.fn.select2 = function(options) {
                    if (isRTL) {
                        options = options || {};
                        options.dir = 'rtl';
                    }
                    
                    return originalSelect2.call(this, options);
                };
            }
        }
        
        // RTL Chart.js Configuration
        function setupRTLCharts() {
            if (typeof Chart !== 'undefined') {
                Chart.defaults.global.rtl = true;
                Chart.defaults.global.legend.rtl = true;
            }
        }
        
        // Initialize RTL Components
        function initRTLComponents() {
            setupRTLCarousel();
            setupRTLIsotope();
            setupRTLMagnificPopup();
            setupRTLNoUISlider();
            setupRTLDropdowns();
            setupRTLModals();
            setupRTLTooltips();
            setupRTLScrollAnimations();
            setupRTLFormValidation();
            setupRTLDatePicker();
            setupRTLSelect2();
            setupRTLCharts();
        }
        
        // RTL Utility Functions
        window.RTLUtils = {
            // Convert LTR coordinates to RTL
            convertCoordinates: function(x, containerWidth) {
                return containerWidth - x;
            },
            
            // Reverse array for RTL display
            reverseArray: function(arr) {
                return arr.slice().reverse();
            },
            
            // Get RTL-aware text alignment
            getTextAlign: function(align) {
                if (align === 'left') return 'right';
                if (align === 'right') return 'left';
                return align;
            },
            
            // Get RTL-aware float direction
            getFloat: function(float) {
                if (float === 'left') return 'right';
                if (float === 'right') return 'left';
                return float;
            },
            
            // Get RTL-aware margin/padding
            getSpacing: function(spacing) {
                if (typeof spacing === 'object') {
                    return {
                        top: spacing.top,
                        right: spacing.left,
                        bottom: spacing.bottom,
                        left: spacing.right
                    };
                }
                return spacing;
            }
        };
        
        // Initialize on DOM ready
        $(document).ready(function() {
            initRTLComponents();
            
            // Add RTL-specific event handlers
            $(window).on('resize', function() {
                // Recalculate RTL layouts on resize
                setTimeout(function() {
                    if ($.fn.isotope) {
                        $('.isotope-container').isotope('layout');
                    }
                }, 100);
            });
        });
        
        // RTL-specific mobile menu handling
        $('.mobile-menu-toggler').on('click', function(e) {
            e.preventDefault();
            $('body').toggleClass('mmenu-active');
            $(this).toggleClass('active');
        });
        
        // RTL-specific carousel navigation
        $(document).on('click', '.owl-nav .owl-prev', function() {
            if (isRTL) {
                $(this).closest('.owl-carousel').trigger('next.owl.carousel');
            }
        });
        
        $(document).on('click', '.owl-nav .owl-next', function() {
            if (isRTL) {
                $(this).closest('.owl-carousel').trigger('prev.owl.carousel');
            }
        });
    }
    
})(jQuery);