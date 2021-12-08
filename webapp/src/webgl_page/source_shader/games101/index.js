export const bezierCurveShaderSource = {
    vshader: `
            attribute vec4 a_position;
            attribute vec4 a_color;
            varying vec4 f_color;
            void main(){
                gl_Position = a_position;
                f_color = a_color;
                gl_PointSize = 3.0;
            }
        `,
    fshader: `
            precision mediump float;
            varying vec4 f_color;
            void main(){
                gl_FragColor = f_color;
            }
        `
}