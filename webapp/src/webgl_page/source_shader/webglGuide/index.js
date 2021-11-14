export const fogShaderSource = {
    vshader: `
            attribute vec4 a_position;
            attribute vec4 a_color;
            varying vec4 f_color;
            uniform mat4 u_modelMatrix;
            uniform vec4 u_eye;
            uniform mat4 u_mvpMatrix; 
            varying float v_dist;
            void main(){
                gl_Position = u_mvpMatrix * a_position;
                f_color = a_color;
                v_dist = gl_Position.w;
            }
        `,
    fshader: `
            precision mediump float;
            varying vec4 f_color;
            varying float v_dist;
            uniform vec4 u_fogColor;
            uniform vec2 u_fogDist;
            void main(){
                float fogFactor = clamp((u_fogDist.y - v_dist) / (u_fogDist.y - u_fogDist.x), 0.0, 1.0);
                vec4 color = mix(u_fogColor, f_color, fogFactor);
                gl_FragColor = color;
            }
        `
}
export const roundedPointShaderSource = {
    vshader: `
            attribute vec4 a_position;
            attribute vec4 a_color;
            varying vec4 f_color;
            void main(){
                gl_Position = a_position;
                f_color = a_color;
                gl_PointSize = 100.0;
            }
        `,
    fshader: `
            precision mediump float;
            varying vec4 f_color;
            void main(){
                gl_FragColor = f_color;
                float d = distance(gl_PointCoord, vec2(0.5, 0.5));
                if(d < 0.5) {
                        gl_FragColor = vec4(f_color); 
                     } else { discard; }
                }
        `
}
export const shadowShaderSource = {
    vshader: `
            attribute vec4 a_position;
            uniform mat4 u_mvpMatrix;
            void main(){
                gl_Position = u_mvpMatrix * a_position;
            }
        `,
    fshader: `
            precision mediump float;
            void main(){
                gl_FragColor = vec4(gl_FragCoord.z, 0, 0, 0);
            }
        `
}
export const shadowNormalShaderSource = {
    vshader:`
        attribute vec4 a_position;
        attribute vec4 a_color;
        uniform mat4 u_mvpMatrix;
        uniform mat4 u_mvpMatrixFromLight;
        varying vec4 v_positionFromLight;
        varying vec4 v_color;
        void main(){
            gl_Position = u_mvpMatrix * a_position;
            v_positionFromLight = u_mvpMatrixFromLight * a_position;
            v_color = a_color;
        }
    `,
    fshader:`
        precision mediump float;
        uniform sampler2D u_shadowMap;
        varying vec4 v_positionFromLight;
        varying vec4 v_color;
        void main(){
            vec3 shadowCoord = (v_positionFromLight.xyz / v_positionFromLight.w)/2.0 + 0.5;
            vec4 rgbaDepth = texture2D(u_shadowMap, shadowCoord.xy);
            float depth = rgbaDepth.r;
            float visibility = (shadowCoord.z > depth + 0.005) ? 0.7: 1.0;
            gl_FragColor = vec4(v_color.rgb * visibility, v_color.a);
        }
    `
}