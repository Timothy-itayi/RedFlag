

declare namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production';
      SECRET_API_KEY: string; 
      
    }
  }
  
