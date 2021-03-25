import React, { Component } from "react";
import { Table } from "reactstrap";
import NewPostModal from "./NewPostModal";

class PostList extends Component {
    render() {
        const posts = this.props.posts;
        return (
            <Table dark>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Text</th>
                        <th>User</th>
                        <th>Channel</th>
                    </tr>
                </thead>
                <tbody>
                    {!posts || posts.length <= 0 ? (
                        <tr>
                            <td colSpan="4" align="center">
                                <b>Ops, no posts available yet</b>
                            </td>
                        </tr>
                    ) : (
                        posts.map(post => (
                            <tr key={post.post_id}>
                                <td>{post.title}</td>
                                <td>{post.text}</td>
                                <td>{post.user_id}</td>
                                <td>{post.channel_id}</td>
                            </tr>
                        ))
                    )}
                </tbody>
            </Table>
        );
    }
}

export default PostList;