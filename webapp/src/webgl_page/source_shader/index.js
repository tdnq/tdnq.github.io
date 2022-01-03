export const basicLayoutShaderSource = {
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
        `,
};

export const rotateCubeUseMouseShaderSource = {
  vshader: `
            attribute vec4 a_position;
            attribute vec4 a_color;
            varying vec4 f_color;
            uniform mat4 u_transformMatrix;
            void main(){
                gl_Position = u_transformMatrix * a_position;
                f_color = a_color;
                gl_PointSize = 10.0;
            }
        `,
  fshader: `
            precision mediump float;
            varying vec4 f_color;
            void main(){
                gl_FragColor = f_color;
            }
        `,
};
