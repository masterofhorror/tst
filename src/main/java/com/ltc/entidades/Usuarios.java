/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ltc.entidades;

import java.io.Serializable;
import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.xml.bind.annotation.XmlRootElement;

/**
 *
 * @author dsalamanca
 */
@Entity
@Table(name = "usuarios")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "Usuarios.findAll", query = "SELECT u FROM Usuarios u")
    , @NamedQuery(name = "Usuarios.findByUsuariosId", query = "SELECT u FROM Usuarios u WHERE u.usuariosId = :usuariosId")
    , @NamedQuery(name = "Usuarios.findByUsuariosEstado", query = "SELECT u FROM Usuarios u WHERE u.usuariosEstado = :usuariosEstado")
    , @NamedQuery(name = "Usuarios.findByUsuariosTipo", query = "SELECT u FROM Usuarios u WHERE u.usuariosTipo = :usuariosTipo")})
public class Usuarios implements Serializable {

    private static final long serialVersionUID = 1L;
    // @Max(value=?)  @Min(value=?)//if you know range of your decimal fields consider using these annotations to enforce field validation
    @Id
    @Basic(optional = false)
    @NotNull
    @Column(name = "usuarios_id")
    private Integer usuariosId;
    @Basic(optional = false)
    @NotNull
    @Column(name = "usuarios_estado")
    private Integer usuariosEstado;
    @Basic(optional = false)
    @NotNull
    @Column(name = "usuarios_tipo")
    private Integer usuariosTipo;

    public Usuarios() {
    }

    public Usuarios(Integer usuariosId) {
        this.usuariosId = usuariosId;
    }

    public Usuarios(Integer usuariosId, Integer usuariosEstado, Integer usuariosTipo) {
        this.usuariosId = usuariosId;
        this.usuariosEstado = usuariosEstado;
        this.usuariosTipo = usuariosTipo;
    }

    public Integer getUsuariosId() {
        return usuariosId;
    }

    public void setUsuariosId(Integer usuariosId) {
        this.usuariosId = usuariosId;
    }

    public Integer getUsuariosEstado() {
        return usuariosEstado;
    }

    public void setUsuariosEstado(Integer usuariosEstado) {
        this.usuariosEstado = usuariosEstado;
    }

    public Integer getUsuariosTipo() {
        return usuariosTipo;
    }

    public void setUsuariosTipo(Integer usuariosTipo) {
        this.usuariosTipo = usuariosTipo;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (usuariosId != null ? usuariosId.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Usuarios)) {
            return false;
        }
        Usuarios other = (Usuarios) object;
        if ((this.usuariosId == null && other.usuariosId != null) || (this.usuariosId != null && !this.usuariosId.equals(other.usuariosId))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.ltc.entidades.Usuarios[ usuariosId=" + usuariosId + " ]";
    }
    
}
