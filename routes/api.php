<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ContactController;



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

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });



Route::get('/contacts',[ContactController::class,'index']);
Route::post('/contact/create',[ContactController::class,'store']);
Route::get('/contact/{id}/edit ',[ContactController::class,'edit']);
Route::put('/contact/{id}/edit',[ContactController::class,'update']);
Route::delete('/contact/{id}/delete',[ContactController::class,'destroy']);

// Route::post("create-student","StudentController@createStudent");

// Route::get("students", "StudentController@studentsListing");

// Route::get("student/{id}", "StudentController@studentDetail");
