"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Transition = /** @class */ (function () {
    function Transition($container, $fromContent, $toContent, name) {
        this.$container = $container;
        this.$from = $fromContent;
        this.$to = $toContent;
        this.name = name;
        // Existing?
        if (exports.transitions[name] === undefined) {
            throw new Error("There is no Transition registered under the key \"" + name + "\"");
        }
    }
    Transition.prototype.play = function () {
        var _this = this;
        // Get obj
        var obj = exports.transitions[this.name];
        // Generic preparation
        this._prepare();
        // Position content
        var newContentPosition = obj.newContentPosition || 'right';
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
                throw new Error("Unknown newContentPosition: " + newContentPosition);
        }
        // Add the new content
        this.$container.append(this.$to);
        // Now play it
        var result = obj.play(this, this.$from, this.$to);
        if (!result || !(result instanceof Promise))
            throw new Error("Transition." + this.name + ".play($from, $to) should return a Promise");
        result.then(function () {
            // Reset 
            _this._finish();
        });
        return result;
    };
    Transition.prototype._prepare = function () {
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
    };
    Transition.prototype._finish = function () {
        this.$container.css({
            width: '',
            height: ''
        });
        this.$to.css({
            width: '',
            height: ''
        });
    };
    return Transition;
}());
exports.default = Transition;
exports.transitions = {
    slideLeft: {
        newContentPosition: 'right',
        play: function (transition, $from, $to) {
            // Promise
            return new Promise(function (resolve) {
                // Options
                var options = {
                    duration: transition.duration || 250,
                    complete: function () {
                        resolve();
                    }
                };
                // Move out the old
                if ($from) {
                    $from.animate({
                        left: -transition.viewWidth
                    }, options);
                }
                // Move in the new
                $to.animate({
                    left: 0
                }, options);
            });
        }
    },
    slideRight: {
        newContentPosition: 'left',
        play: function (transition, $from, $to) {
            // Promise
            return new Promise(function (resolve) {
                // Options
                var options = {
                    duration: transition.duration || 250,
                    complete: function () {
                        resolve();
                    }
                };
                // Move out the old
                if ($from) {
                    $from.animate({
                        left: transition.viewWidth
                    }, options);
                }
                // Move in the new
                $to.animate({
                    left: 0
                }, options);
            });
        }
    },
    // ███████╗ █████╗ ██████╗ ███████╗
    // ██╔════╝██╔══██╗██╔══██╗██╔════╝
    // █████╗  ███████║██║  ██║█████╗  
    // ██╔══╝  ██╔══██║██║  ██║██╔══╝  
    // ██║     ██║  ██║██████╔╝███████╗
    // ╚═╝     ╚═╝  ╚═╝╚═════╝ ╚══════╝
    //                                 
    fade: {
        newContentPosition: 'transparent',
        play: function (transition, $from, $to) {
            // Promise
            return new Promise(function (resolve) {
                // Options
                var options = {
                    duration: transition.duration || 250,
                    complete: function () {
                        resolve();
                    }
                };
                // Move in the new
                $to.animate({
                    opacity: 1
                }, options);
            });
        }
    }
};
//# sourceMappingURL=Transition.js.map