// Generated by CoffeeScript 1.3.3

/*
 * Copyright (c) 2011, iSENSE Project. All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this
 * list of conditions and the following disclaimer. Redistributions in binary
 * form must reproduce the above copyright notice, this list of conditions and
 * the following disclaimer in the documentation and/or other materials
 * provided with the distribution. Neither the name of the University of
 * Massachusetts Lowell nor the names of its contributors may be used to
 * endorse or promote products derived from this software without specific
 * prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE REGENTS OR CONTRIBUTORS BE LIABLE FOR
 * ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT
 * LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY
 * OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH
 * DAMAGE.
 *
*/


(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  window.Timeline = (function(_super) {

    __extends(Timeline, _super);

    /*
        Constructor
            Change default mode to lines only
    */


    function Timeline(canvas) {
      this.canvas = canvas;
      Timeline.__super__.constructor.call(this, this.canvas);
      this.mode = this.LINES_MODE;
      this.xAxis = data.timeFields[0];
    }

    /*
        Build options relevent to timeline
    */


    Timeline.prototype.buildOptions = function() {
      Timeline.__super__.buildOptions.call(this);
      $.extend(true, this.chartOptions, {
        title: {
          text: 'Timeline'
        }
      });
      return this.chartOptions.xAxis = {
        type: 'datetime'
      };
    };

    /*
        Overwrite xAxis controls to only allow time fields
    */


    Timeline.prototype.drawXAxisControls = function() {
      return Timeline.__super__.drawXAxisControls.call(this, function(fieldIndex) {
        return (Number(data.fields[fieldIndex].typeID)) === 7;
      });
    };

    return Timeline;

  })(Scatter);

  globals.timeline = new Timeline('timeline_canvas');

}).call(this);
