1. Particle Array Initialization
    * The particle array is created to store the properties of all particles.
    * Each particle object contains:
        * Position (x, y): The coordinates where the particle is located.
        * Size (size): The size of the particle, initialized randomly.
        * Color (color): The fill color of the particle, also generated randomly.
2. setup() Function
    * The canvas is initialized with a size of 800x600 pixels using createCanvas(800, 600).
    * The noStroke() function is used to turn off the outline of shapes, ensuring that only the fill color is visible for smoother visuals.
3. draw() Function
    * Background Update:
        * A semi-transparent background color is set using background(20, 20, 40, 50).
        * The fourth parameter (alpha value) creates a fading effect that leaves a visual trail of particles.
    * Particle Generation:
        * In every frame, a new particle is added to the particle array.
        * The properties of the particle, such as position, size, and color, are randomly generated using the random() function for a dynamic effect.
    * Particle Drawing and Updating:
        * The forEach() method is used to loop through the particle array.
        * For each particle:
            * A circle is drawn using ellipse() at the particle's position.
            * The circle is filled with the particle's specific color.
            * The particle's size decreases over time by 5% using the formula p.size *= 0.95.
    * Particle Filtering:
        * Particles with a size smaller than 0.1 are removed from the array using the filter() method.
        * This optimization prevents excessive memory usage by ensuring only visible particles remain in the array.
4. Visual and Interactive Ideas
    * The particle system creates a mesmerizing effect, where particles appear, shrink, and fade away.
    * Watching the dynamic behavior inspired new ideas for improvement:
        * Adding interactivity: Particles could respond to the mouse's movement, making the animation more engaging.
        * Enhancing colors: Introducing color gradients or transitions to create more visually appealing effects.
        * Background gradients: Gradually changing the background color to add depth and a layered look to the scene.
        * Interactive shapes: Allowing particles to take different shapes or follow patterns based on user interaction.
