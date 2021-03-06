import React from 'react';
import Photo from './Photo';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

function Travelgram(props) {
    return <div>
                <Link id="round-button" class="addIcon" to="/AddPhoto"></Link>
                {/* <a class="addIcon" onClick={props.onNavigate} href="#AddPhoto"></a> */}
                {/* <button onClick={props.onNavigate} className="addIcon"></button> */}
                <div className="photo-grid">
                    {props.posts
                        .sort(function(x,y) {
                            return y.id - x.id
                        })
                    .map((post, index )=> <Photo key={index} post={post} onRemovePhoto={props.onRemovePhoto}/>)}
                </div>
            </div>
}

Travelgram.propTypes = {
    posts: PropTypes.array.isRequired,
    onRemovePhoto: PropTypes.func.isRequired
}

export default Travelgram;