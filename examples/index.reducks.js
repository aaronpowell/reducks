import { createStore, combineReducers, applyMiddleware } from '../src';
import app from './index';

app(createStore, combineReducers, applyMiddleware);
