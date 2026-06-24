// ========================================
// USERS - Fetch and Display from API
// ========================================

(function() {
    'use strict';
    
    const USERS_API = 'http://localhost:5000/api/users';
    
    /**
     * Fetch users from backend
     */
    async function fetchUsers() {
        try {
            const response = await fetch(USERS_API);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching users:', error);
            return { success: false, error: error.message };
        }
    }
    
    /**
     * Display users in the DOM
     */
    function displayUsers(users) {
        const container = document.getElementById('usersList');
        if (!container) return;
        
        if (!users || users.length === 0) {
            container.innerHTML = `
                <div class="no-users">
                    <p>No users registered yet. Be the first!</p>
                    <p style="font-size: 0.875rem; color: var(--color-text-muted);">
                        Use the contact form to register
                    </p>
                </div>
            `;
            return;
        }
        
        container.innerHTML = users.map(user => `
            <div class="user-card fade-in visible">
                <div class="user-avatar">${user.name.charAt(0).toUpperCase()}</div>
                <div class="user-info">
                    <h4 class="user-name">${user.name}</h4>
                    <p class="user-email">${user.email}</p>
                    <span class="user-role">${user.role || 'user'}</span>
                </div>
                <div class="user-actions">
                    <button class="user-btn delete-btn" data-id="${user.id}" aria-label="Delete user">
                        🗑️
                    </button>
                </div>
            </div>
        `).join('');
        
        // Add delete functionality
        container.querySelectorAll('.delete-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const id = this.getAttribute('data-id');
                deleteUser(id);
            });
        });
    }
    
    /**
     * Delete a user
     */
    async function deleteUser(id) {
        if (!confirm('Are you sure you want to delete this user?')) return;
        
        try {
            const response = await fetch(`${USERS_API}/${id}`, {
                method: 'DELETE'
            });
            const data = await response.json();
            
            if (data.success) {
                showToast('✅ User deleted successfully', 'success');
                loadUsers(); // Refresh the list
            } else {
                showToast('❌ ' + data.message, 'error');
            }
        } catch (error) {
            console.error('Error deleting user:', error);
            showToast('❌ Failed to delete user', 'error');
        }
    }
    
    /**
     * Load users
     */
    async function loadUsers() {
        const result = await fetchUsers();
        
        if (result.success) {
            displayUsers(result.data);
        } else {
            const container = document.getElementById('usersList');
            if (container) {
                container.innerHTML = `
                    <div class="api-error">
                        <p>⚠️ Could not connect to backend</p>
                        <p style="font-size: 0.875rem; color: var(--color-text-muted);">
                            Make sure the server is running: <code>cd backend && npm run dev</code>
                        </p>
                    </div>
                `;
            }
        }
    }
    
    // Load users when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', loadUsers);
    } else {
        loadUsers();
    }
})();