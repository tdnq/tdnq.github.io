#ifdef GL_ES
precision mediump float;
#endif

#define PI 3.14159265359

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

float plot(vec2 st){
    float scale = 0.25;
    float translateY = 0.5;
    return smoothstep(0.0,0.005, abs(st.y- scale * cos(st.x) - translateY));
}
void main(){
    vec2 st = gl_FragCoord.xy/u_resolution.xy;

    vec2 pos = st - vec2(0.5);
    float r = length(pos) * 2.;
    float a = atan(pos.y, pos.x);

    float f = abs(cos(a*2.5))*.5+0.30;;

    vec3 color = vec3(1. - smoothstep( f, f +0.02, r ));
    gl_FragColor = vec4(color, 1.0);
}
