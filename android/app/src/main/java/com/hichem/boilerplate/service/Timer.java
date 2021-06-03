package com.hichem.boilerplate.service;

import android.content.Intent;
import android.os.Bundle;

import com.facebook.react.HeadlessJsTaskService;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.jstasks.HeadlessJsTaskConfig;
import com.facebook.react.jstasks.LinearCountingRetryPolicy;

import javax.annotation.Nullable;

public class Timer extends HeadlessJsTaskService {

    @Override
    protected @Nullable HeadlessJsTaskConfig getTaskConfig(Intent intent) {
        Bundle extras = intent.getExtras();
        WritableMap data = extras != null ? Arguments.fromBundle(extras) : null;
        return new HeadlessJsTaskConfig(
                "timer", // Use the registered headless Task here
                data,
                1000, false);


    }
}