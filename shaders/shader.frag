precision mediump float;

void main(){
    uv = gl_FragCoord.xy;
    float r = uv.x;
    float g = uv.y;
    float b = 0.;
    gl_FragColor = vec4(r, g, b, 1.);
}
