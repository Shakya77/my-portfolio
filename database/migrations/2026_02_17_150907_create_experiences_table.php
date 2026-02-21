<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('experiences', function (Blueprint $table) {
            $table->id();

            $table->string('company');             // Company or organization name
            $table->string('role');                // e.g., Full Stack Developer, Intern
            $table->text('description')->nullable(); // Responsibilities, achievements
            $table->date('start_date');            // When you started
            $table->date('end_date')->nullable();  // NULL if current
            $table->boolean('currently_working')->default(false); // true if ongoing
            $table->string('location')->nullable(); // Optional: city or remote
            $table->string('company_website')->nullable(); // Optional
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('experiences');
    }
};
