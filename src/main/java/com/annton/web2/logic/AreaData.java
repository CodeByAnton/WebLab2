package com.annton.web2.logic;

import java.io.Serializable;
import java.time.LocalDateTime;

public class AreaData implements Serializable {
    private double x;
    private double y;
    private double r;
    private boolean result;
    private String executionTime;
    private String localDateTime;

    public AreaData(double x, double y, double r, boolean result, String executionTime, String localDateTime) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.result = result;
        this.executionTime = executionTime;
        this.localDateTime = localDateTime;
    }

    public double getX() {
        return x;
    }

    public void setX(double x) {
        this.x = x;
    }

    public double getY() {
        return y;
    }

    public void setY(double y) {
        this.y = y;
    }

    public double getR() {
        return r;
    }

    public void setR(double r) {
        this.r = r;
    }

    public boolean isResult() {
        return result;
    }

    public void setResult(boolean result) {
        this.result = result;
    }

    public String getExecutionTime() {
        return executionTime;
    }

    public void setExecutionTime(String executionTime) {
        this.executionTime = executionTime;
    }

    public String getLocalDateTime() {
        return localDateTime;
    }

    public void setLocalDateTime(String localDateTime) {
        this.localDateTime = localDateTime;
    }
}
