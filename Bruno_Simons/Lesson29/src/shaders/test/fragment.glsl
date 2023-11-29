varying vec2 vUv;

void main()
{

    // Pattern 1
    // gl_FragColor = vec4(vUv, 1.0, 1.0);

    // Pattern 2
    // gl_FragColor = vec4(vUv, 0.0, 1.0);

    // Pattern 3
    // float strength = vUv.x;
    // gl_FragColor = vec4(strength, strength, strength, 1.0);

    // Pattern 4
    // float strength = vUv.y;
    // gl_FragColor = vec4(strength, strength, strength, 1.0);

    // Pattern 5
    // float strength = (1.0 - vUv.y);
    // gl_FragColor = vec4(strength, strength, strength, 1.0);

    // Pattern 6
    // float strength = (vUv.y * 10.0);
    // gl_FragColor = vec4(strength, strength, strength, 1.0);

    // Pattern 7
    // float strength = mod(vUv.y * 10.0, 1.0);
    // gl_FragColor = vec4(strength, strength, strength, 1.0);

    // Pattern 8 (Bad for performance)
    /* float strength = mod(vUv.y * 10.0, 1.0);

    if(strength < 0.5)
    {
        strength = 0.0;
    }
    else
    {
        strength = 1.0;
    }
    
    gl_FragColor = vec4(strength, strength, strength, 1.0); */

    // Pattern 8 (Same thing but shorter)
    /* float strength = mod(vUv.y * 10.0, 1.0);

    strength = strength < 0.5 ? 0.0 : 1.0;

    gl_FragColor = vec4(strength, strength, strength, 1.0); */

    // Pattern 8 (Optimised solution)
    // float strength = mod(vUv.y * 10.0, 1.0);
    // strength = step(0.5, strength);
    // gl_FragColor = vec4(strength, strength, strength, 1.0);

    // Pattern 9
    // float strength = mod(vUv.y * 10.0, 1.0);
    // strength = step(0.8, strength);
    // gl_FragColor = vec4(strength, strength, strength, 1.0);

    // Pattern 10
    // float strength = mod(vUv.x * 10.0, 1.0);
    // strength = step(0.8, strength);
    // gl_FragColor = vec4(strength, strength, strength, 1.0);

    // Pattern 11 (Unoptimised solution)
    // float strength1 = mod(vUv.x * 10.0, 1.0);
    // strength1 = step(0.8, strength1);
    // float strength2 = mod(vUv.y * 10.0, 1.0);
    // strength2 = step(0.8, strength2);
    // float strength = strength1 + strength2;
    // gl_FragColor = vec4(strength, strength, strength, 1.0);

    // Pattern 11 (Optimised solution)
    // float strength = step(0.8, mod(vUv.x * 10.0, 1.0));
    // strength += step(0.8, mod(vUv.y * 10.0, 1.0));
    // gl_FragColor = vec4(strength, strength, strength, 1.0);

    // Pattern 12
    // float strength = step(0.8, mod(vUv.x * 10.0, 1.0));
    // strength *= step(0.8, mod(vUv.y * 10.0, 1.0));
    // gl_FragColor = vec4(strength, strength, strength, 1.0);

    // Pattern 13
    // float strength = step(0.2, mod(vUv.x * 10.0, 1.0));
    // strength *= step(0.8, mod(vUv.y * 10.0, 1.0));
    // gl_FragColor = vec4(strength, strength, strength, 1.0);

    // Pattern 14
    // float barX = step(0.4, mod(vUv.x * 10.0, 1.0));
    // barX *= step(0.8, mod(vUv.y * 10.0, 1.0));
    // float barY = step(0.8, mod(vUv.x * 10.0, 1.0));
    // barY *= step(0.4, mod(vUv.y * 10.0, 1.0));

    // float strength = barX + barY;
    // gl_FragColor = vec4(strength, strength, strength, 1.0);

    // Pattern 15
    // float barX = step(0.4, mod(vUv.x * 10.0, 1.0));
    // barX *= step(0.8, mod(vUv.y * 10.0 + 0.2, 1.0));
    // float barY = step(0.8, mod(vUv.x * 10.0 + 0.2, 1.0));
    // barY *= step(0.4, mod(vUv.y * 10.0, 1.0));

    // float strength = barX + barY;
    // gl_FragColor = vec4(strength, strength, strength, 1.0);

    // Pattern 16
    // float strength = abs(vUv.x - 0.5);
    // gl_FragColor = vec4(strength, strength, strength, 1.0);

    // Pattern 17
    // float strength = min(abs(vUv.x - 0.5), abs(vUv.y - 0.5));
    // gl_FragColor = vec4(strength, strength, strength, 1.0);

    // Pattern 18
    // float strength = max(abs(vUv.x - 0.5), abs(vUv.y - 0.5));
    // gl_FragColor = vec4(strength, strength, strength, 1.0);

    // Pattern 19
    // float strength = step(0.2, max(abs(vUv.x - 0.5), abs(vUv.y - 0.5)));
    // gl_FragColor = vec4(strength, strength, strength, 1.0);

    // Pattern 20
    // float square1 = step(0.2, max(abs(vUv.x - 0.5), abs(vUv.y - 0.5)));
    // float square2 = 1.0 - step(0.25, max(abs(vUv.x - 0.5), abs(vUv.y - 0.5)));
    // float strength = square1 * square2;
    // gl_FragColor = vec4(strength, strength, strength, 1.0);

    // Pattern 21
    // float strength = (floor(vUv.x * 10.0) / 10.0);
    // gl_FragColor = vec4(strength, strength, strength, 1.0);

    // Pattern 22
    // float strength = (floor(vUv.x * 10.0) / 10.0) * (floor(vUv.y * 10.0) / 10.0);
    // gl_FragColor = vec4(strength, strength, strength, 1.0);

    // Pattern 23
    float strength = (floor(vUv.x * 10.0) / 10.0) * (floor(vUv.y * 10.0) / 10.0);
    gl_FragColor = vec4(strength, strength, strength, 1.0);

}