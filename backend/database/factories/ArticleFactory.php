<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Article>
 */
class ArticleFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'photo' => fake()->imageUrl(640,480),
            'designation' => fake()->sentence(),
            'prixht' => fake()->numberBetween(10, 100),
            'tva' => 0.2,
            'stock' => fake()->numberBetween(10, 200),
            'stock_initial' => fake()->numberBetween(10, 200),
            'active' => 1,
            'sous_famille_id' => fake()->numerify(1,2),


        ];
    }
}
