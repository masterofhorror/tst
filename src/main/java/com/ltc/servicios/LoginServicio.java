/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ltc.servicios;

import com.ltc.dto.InfoUsuariosDTO;
import com.ltc.dto.MensajeDTO;
import javax.ejb.Stateless;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

/**
 * REST Web Service
 *
 * @author davidscorp
 */
@Path("/session")
@Stateless
public class LoginServicio {

    @GET
    @Path("/login")
    @Produces(MediaType.APPLICATION_JSON)
    public MensajeDTO login (InfoUsuariosDTO infoUsuariosDTO){
        return null;
    }
}
