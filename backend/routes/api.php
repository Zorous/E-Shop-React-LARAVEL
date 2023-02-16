<?php

use App\Http\Controllers\ArticleController;
use App\Http\Controllers\FamilleController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\SousFamilleController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::post('login',[LoginController::class,"login"]);
Route::post('logout',[logoutController::class,"logout"]);


Route::get('/familles',[FamilleController::class,"index"]);
Route::get('/articles',[ArticleController::class,"index"]);
Route::get('/sousfamilles',[SousFamilleController::class,"index"]);

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

