package com.annton.web2.servlet;

import com.annton.web2.logic.AreaData;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

import java.io.IOException;
import java.io.PrintWriter;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Arrays;
import java.util.LinkedList;
import java.util.List;

@WebServlet(name="areaCheckServlet", value = "/areaCheck")
public class AreaCheckServlet extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

        long startTime = System.nanoTime();
        String path= getServletContext().getContextPath();
        final double x;
        final double y;
        final double r;

        try {
             x=Double.parseDouble(req.getParameter("X"));
             y=Double.parseDouble(req.getParameter("Y"));
             r=Double.parseDouble(req.getParameter("R"));


        } catch (NumberFormatException|NullPointerException e){
            resp.sendRedirect("/invalid_values.jsp");
            return;
        }
        if (!(validX(x) && validY(y) && validR(r))){
            resp.sendRedirect(path+"/invalid_values.jsp");
        }


        boolean res=checkHit( x, y, r);
        LocalDateTime currentDateTime = LocalDateTime.now();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd-MM-yyyy HH:mm:ss");
        String formattedDateTime = currentDateTime.format(formatter);
        String exTime = String.format("%.6f", ((System.nanoTime() - startTime) / 1_000_000.0/1000)).replace(',', '.');
        AreaData areaData=new AreaData(x,y,r,res,exTime,formattedDateTime);

        HttpSession session=req.getSession();
        LinkedList<AreaData> areaDataList= (LinkedList<AreaData>) session.getAttribute("data");
        if (areaDataList==null){
            areaDataList=new LinkedList<>();
        }
        areaDataList.addFirst(areaData);
        //Сохранение
        session.setAttribute("data",areaDataList);
        resp.sendRedirect(path+"/result_page.jsp");


    }
    private boolean checkHit(double x, double y, double r){
        if (x>0 && y>0){
            return false;
        }
        if (x>=0 &&y<=0){
            return (x*x+y*y<=r*r/4);
        }
        if (x<=0 &&y<=0){
            return (y>=-2*x-r);
        }
        if (x<=0 &&y>=0){
            return ((x>=-r/2) && (y<=r));
        }


        return true;
    }
    private boolean validX(double x){
        return (-3<x && x<3);
    }
    private boolean validY(double y){
        List<Double> arr=Arrays.asList(-3.0,-2.0,-1.0,0.0,1.0,2.0,3.0,4.0,5.0);
        return arr.contains(y);
    }
    private boolean validR(double r){
        List<Double> arr=Arrays.asList(1.0,2.0,3.0,4.0,5.0);
        return arr.contains(r);
    }
}
