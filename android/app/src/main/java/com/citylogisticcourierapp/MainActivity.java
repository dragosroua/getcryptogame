package com.citylogisticcourierapp;
import android.os.Handler;
import java.util.logging.LogRecord;
import android.util.Log;
import com.facebook.react.ReactActivity;
import android.content.Intent;
import android.os.Bundle;
import android.os.Looper;
import android.widget.Toast;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "GetCryptoGame";
  }

  
  @Override
    protected void onCreate(Bundle savedInstanceState) {
      super.onCreate(savedInstanceState);
      //Toast.makeText(getApplicationContext(), "onCreate called", Toast.LENGTH_LONG).show();
      //Log.i("DemoLog", "beforetest startService");
      //new Handler(Looper.getMainLooper()).postDelayed(() -> startService(new Intent(getApplicationContext(), HeartBeatTask.class)), 300);
        
    }

    @Override
    protected void onPause() {
        super.onPause();  // Always call the superclass method first
        Toast.makeText(getApplicationContext(), "onStop called", Toast.LENGTH_LONG).show();
      new Handler(Looper.getMainLooper()).postDelayed(() -> startService(new Intent(getApplicationContext(), HeartBeatTask.class)), 300);
        
    }
  
}
