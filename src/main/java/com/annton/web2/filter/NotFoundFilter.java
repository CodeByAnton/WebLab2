package com.annton.web2.filter;

import jakarta.servlet.*;
import jakarta.servlet.annotation.WebFilter;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;


import java.io.IOException;
import java.util.HashSet;
import java.util.Set;

@WebFilter(urlPatterns = "/*")
public class NotFoundFilter implements Filter {


    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        HttpServletRequest request = (HttpServletRequest) servletRequest;
        HttpServletResponse response = (HttpServletResponse) servletResponse;

        String path=request.getServletContext().getContextPath();
        Set<String> allowedURIs = new HashSet<>();
        allowedURIs.add(path+"/areaCheck");
        allowedURIs.add(path+"/controller");
        allowedURIs.add(path+"/error.jsp");
        allowedURIs.add(path+"/index.jsp");
        allowedURIs.add(path+"/invalid_values.jsp");
        allowedURIs.add(path+"/result_page.jsp");
        allowedURIs.add(path+"/main.js");
        allowedURIs.add(path+"/canvas.js");




        String requestURI = request.getRequestURI();


        if (allowedURIs.contains(requestURI)) {
            filterChain.doFilter(servletRequest, servletResponse);
        } else {
            RequestDispatcher dispatcher = request.getRequestDispatcher("/error.jsp");
            dispatcher.forward(request, response);
       }
    }


}