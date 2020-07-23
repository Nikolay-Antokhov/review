import React from 'react';
import { connect } from 'react-redux';
import Auth from './../components/Auth';
import { signIn } from './../actions/Auth';

const mapStateToProps = state => state.auth;

export default connect(mapStateToProps, { signIn })(props => props.jwt === null ? <Auth { ...props } /> : props.children);
