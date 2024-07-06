import { Injectable,Inject, inject } from '@angular/core';
import {   CanActivateFn,Router,   } from '@angular/router';


export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const role = localStorage.getItem('user');
  const requiredRole = route.data['Role'] as string;
  if(!role){
    router.navigate(['/login']);
  }
  if (role === requiredRole) {
    return true;
  } else {
    console.error('User does not have the required role');
    return false; 
  }
};
