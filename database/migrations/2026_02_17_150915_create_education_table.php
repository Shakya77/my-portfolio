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
        Schema::create('education', function (Blueprint $table) {
            $table->id();

            $table->text('college');               // e.g., St. Xavier's College, Kathmandu
            $table->text('institution');           // e.g., Tribhuvan University
            $table->text('degree');                // e.g., Bachelor of Science in Computer Science and IT
            $table->text('abbreviation')->nullable(); // e.g., BSc CSIT
            $table->text('field_of_study');        // e.g., Computer Science and Information Technology
            $table->year('start_year');
            $table->year('end_year')->nullable();    // NULL if ongoing
            $table->boolean('currently_studying')->default(false); // true for ongoing
            $table->text('description')->nullable(); // optional
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('education');
    }
};
