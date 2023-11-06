package com.annton.web2.servlet;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

import java.io.IOException;
import java.io.PrintWriter;

@WebServlet(name="controllerServlet", value="/controller")
public class ControllerServlet extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String path= getServletContext().getContextPath();
        PrintWriter out=resp.getWriter();
        out.println(req.getParameterMap());
        if (req.getParameter("clear")!=null){
            HttpSession httpSession=req.getSession();
            httpSession.invalidate();
            resp.sendRedirect(path+"/index.jsp");
//
//            getServletContext().getNamedDispatcher("clearServlet").forward(req,resp);
        } else if (req.getParameter("X")!=null && req.getParameter("Y")!=null && req.getParameter("R")!=null) {
            getServletContext().getNamedDispatcher("areaCheckServlet").forward(req,resp);

        }else {
            resp.sendRedirect(path+"/index.jsp");
        }
    }
}
