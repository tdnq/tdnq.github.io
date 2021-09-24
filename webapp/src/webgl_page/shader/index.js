
 export const basicLayoutShaderSouce = {
    vshader: `
            attribute vec4 a_position;
            attribute vec4 a_color;
            varying vec4 f_color;
            void main(){
                gl_Position = a_position;
                f_color = a_color;
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
