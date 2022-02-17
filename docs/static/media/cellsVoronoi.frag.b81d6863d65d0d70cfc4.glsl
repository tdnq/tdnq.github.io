#ifdef GL_ES
precision mediump float;
#endif

#define PI 3.14159265359

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main(){
    vec2 st = gl_FragCoord.xy / u_resolution.xy;
    vec3 color = vec3(0.);
    vec2 point[5];
    point[0] = vec2( 0.25,0.25 );
    point[1] = vec2( 0.5,0.5 );
    point[2] = vec2( 0.75,0.75 );
    point[3] = vec2( 0.5,0.75 );
    point[4] = u_mouse.xy / u_resolution.xy;
    
    float m_dist = 1.;
    vec2 m_point;

    for(int i =0;i<5;i++){
        float dist = distance(st,point[i]);
        if(dist<m_dist){
            m_dist = dist;
            m_point = point[i];
        }
    }

    color += m_dist*2.;

    color.rg = m_point;

    color -= abs(sin(80.*m_dist)) * 0.07;
    color += 1. - step(0.02,m_dist);
    gl_FragColor = vec4(color,1.);

}