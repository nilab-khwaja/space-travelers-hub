import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    rockets:[],
    status:'idle',
    error:null
}

export const fetchRockets = createAsyncThunk('rocket/fetchRockets', async () => {
    try {
      const response = await axios.get('https://api.spacexdata.com/v3/rockets');
      console.log(response);
      return response.data.map((rocket) => ({
        id: rocket.id,
        rocket_name: rocket.rocket_name,
        rocket_type: rocket.rocket_type,
        flickr_images: rocket.flickr_images,
      }));
    } catch (error) {
      throw error;
    }
  });

const rocketReduser = createSlice({
    name:'rocket' ,
    initialState,
    reducers:{},
    extraReducers:(builder) =>{
        builder
        .addCase(fetchRockets.pending, (state) => {
            state.status = 'loading'
        })

        .addCase(fetchRockets.fulfilled,(state, action) =>{
            state.status = 'successed'
            state.rockets = action.payload
        })

        .addCase(fetchRockets.rejected,(state, action) =>{
            state.status ='faild'
            state.error = action.error.message
        })
    }
})

export default rocketReduser.reducer;