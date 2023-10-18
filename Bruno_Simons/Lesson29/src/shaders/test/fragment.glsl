varying vec2 vUv;

void main()
{
    // Pattern 1
    // float strength = vUv.x;

    // Pattern 7
    // float strength = mod(vUv.y * 10.0, 1.0);
    
    // Pattern 8
    float strength = mod(vUv.y * 10.0, 1.0);

    gl_FragColor = vec4(strength, strength, strength, 1.0);
}