<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\ArticleController;
use App\Http\Controllers\FamilleController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get("/articles",[ArticleController::class,"index"]);
Route::get("/familles",[FamilleController::class,"index"]);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
