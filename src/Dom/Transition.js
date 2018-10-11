/** 
 * @module Dom
 */
class Transition {

    constructor($container, $fromContent, $toContent, name) {
        
        /**
         * @property $container
         * @type {jQuery}
         */
        this.$container = $container;

        this.$from = $fromContent;

        this.$to = $toContent;

        this.name = name;

        this.viewWidth = false;
        this.viewHeight = false;


        this.duration = null;


        // Existing?
        if (Transition[name] === undefined) {
            throw new Error(`There is no Transition registered under the key "${name}"`);
        }

    }

    play() {

        // Get obj
        let obj = Transition[this.name];
        
        // Generic preparation
        this._prepare();
        
        // Position content
        let newContentPosition = obj.newContentPosition || 'right';
        switch (newContentPosition) {

            case 'default': 
                this.$to.css({
                    left: 0,
                    top: 0
                });
                break;

            case 'transparent':
                this.$to.css({
                    left: 0,
                    top: 0,
                    opacity: 0
                });
                break;

            case 'right':
                this.$to.css({
                    left: this.viewWidth,
                    top: 0
                });
                break;

            case 'left':
                this.$to.css({
                    left: -this.viewWidth,
                    top: 0
                });
                break;

            default:
                throw new Error(`Unknown newContentPosition: ${newContentPosition}`);

        }

        // Add the new content
        this.$container.append(this.$to);        

        // Now play it
        let result = obj.play(this, this.$from, this.$to);
        if (!result || !(result instanceof Promise)) throw new Error(`Transition.${this.name}.play($from, $to) should return a Promise`);
        result.then(() => {

            // Reset 
            this._finish();

        });
        return result;

    }


    _prepare() {

        // Get width
        this.viewWidth = this.$container.width();
        this.viewHeight = this.$container.height();

        // Style container
        this.$container.css({
            position: 'relative',
            width: this.viewWidth,
            height: this.viewHeight,
            overflow: 'hidden'
        });

        // Set style to content
        if (this.$from) {
            this.$from.css({
                position: 'absolute',
                width: this.viewWidth,
                height: this.viewHeight,
                zIndex: 10
            });
        }
        this.$to.css({
            position: 'absolute',
            width: this.viewWidth,
            height: this.viewHeight,
            zIndex: 20
        });
       

    }

    _finish() {

        this.$container.css({
            width: '',
            height: ''            
        });
        this.$to.css({
            width: '',
            height: ''            
        });

    }





}


// ███████╗██╗     ██╗██████╗ ███████╗    ██╗     ███████╗███████╗████████╗
// ██╔════╝██║     ██║██╔══██╗██╔════╝    ██║     ██╔════╝██╔════╝╚══██╔══╝
// ███████╗██║     ██║██║  ██║█████╗      ██║     █████╗  █████╗     ██║   
// ╚════██║██║     ██║██║  ██║██╔══╝      ██║     ██╔══╝  ██╔══╝     ██║   
// ███████║███████╗██║██████╔╝███████╗    ███████╗███████╗██║        ██║   
// ╚══════╝╚══════╝╚═╝╚═════╝ ╚══════╝    ╚══════╝╚══════╝╚═╝        ╚═╝   
//                                                                         

Transition.slideLeft = {
    
    newContentPosition: 'right',
    play: (transition, $from, $to) => {

        // Promise
        return new Promise((resolve) => {

            // Options
            let options = {
                duration: transition.duration || 250,
            };

            // Move out the old
            if ($from) {
                $from.animate({
                    left: -transition.viewWidth
                }, options);
            }
            
            // Move in the new
            options.complete = () => {
                resolve();
            };
            $to.animate({
                left: 0
            }, options);

        });


    }   

};

// ███████╗██╗     ██╗██████╗ ███████╗    ██████╗ ██╗ ██████╗ ██╗  ██╗████████╗
// ██╔════╝██║     ██║██╔══██╗██╔════╝    ██╔══██╗██║██╔════╝ ██║  ██║╚══██╔══╝
// ███████╗██║     ██║██║  ██║█████╗      ██████╔╝██║██║  ███╗███████║   ██║   
// ╚════██║██║     ██║██║  ██║██╔══╝      ██╔══██╗██║██║   ██║██╔══██║   ██║   
// ███████║███████╗██║██████╔╝███████╗    ██║  ██║██║╚██████╔╝██║  ██║   ██║   
// ╚══════╝╚══════╝╚═╝╚═════╝ ╚══════╝    ╚═╝  ╚═╝╚═╝ ╚═════╝ ╚═╝  ╚═╝   ╚═╝   
//                                                                             
Transition.slideRight = {
    
    newContentPosition: 'left',
    play: (transition, $from, $to) => {

        // Promise
        return new Promise((resolve) => {

            // Options
            let options = {
                duration: transition.duration || 250,
            };

            // Move out the old
            if ($from) {
                $from.animate({
                    left: transition.viewWidth
                }, options);
            }
            
            // Move in the new
            options.complete = () => {
                resolve();
            };
            $to.animate({
                left: 0
            }, options);

        });


    }   

};


// ███████╗ █████╗ ██████╗ ███████╗
// ██╔════╝██╔══██╗██╔══██╗██╔════╝
// █████╗  ███████║██║  ██║█████╗  
// ██╔══╝  ██╔══██║██║  ██║██╔══╝  
// ██║     ██║  ██║██████╔╝███████╗
// ╚═╝     ╚═╝  ╚═╝╚═════╝ ╚══════╝
//                                 
Transition.fade = {

    newContentPosition: 'transparent',
    play: (transition, $from, $to) => {

        // Promise
        return new Promise((resolve) => {

            // Options
            let options = {
                duration: transition.duration || 250,
            };
            
            // Move in the new
            options.complete = () => {
                resolve();
            };
            $to.animate({
                opacity: 1
            }, options);

        });

    }


};




export default Transition;