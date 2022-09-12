uniform vec2  u_resolution;

vec2 fn(vec2 z, vec2 c){
	return mat2(z,-z.y,z.x) *z +c;
}
void main() {
	vec2 st = gl_FragCoord.xy / u_resolution.xy;
	vec2 pos = st - vec2(0.5);
	vec2 center = vec2(0.,0.);
	vec2 c = center + 4.0 * pos;
	vec2 z = vec2(0.);
	int iteration = 256;

	bool escaped = false;
	int j;
	for(int i =0;i<65535;i++){
		if(i>iteration) {
			break;
		}
		j = i;
		z = fn(z,c);
		if(length(z)>2.){
			escaped = true;
			break;
		}
	}

	gl_FragColor = vec4(escaped? vec3(float(j)) / float(iteration) : vec3(0.), 1.);
}